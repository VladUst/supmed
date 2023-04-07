import React, { memo, useCallback, useState } from 'react';
import { classNames } from '../../../shared';
import cls from './ProcessAnamnesis.module.scss';
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { getProcessAnamnesisState } from '../model/getProcessAnamnesisState';
import { processAnamnesisRequest } from '../model/processAnamnesisRequest';
import { useAppDispatch } from '../../../app/providers/StoreProvider';
import { PageLoader } from '../../../widgets/PageLoader/PageLoader';
import { EntitiesList } from '../../../entities';
import { processAnamnesisActions } from '../model/processAnamnesisSlice';

interface ProcessAnamnesisProps {
  className?: string
}
export const ProcessAnamnesis = memo((props: ProcessAnamnesisProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const { entitiesList, isLoading, anamnesis, error } = useSelector(getProcessAnamnesisState);
  const [text, setText] = useState<string>('');

  const onChangeAnamnesis = useCallback((value: string) => {
    dispatch(processAnamnesisActions.setAnamnesis(value));
  }, [dispatch]);
  function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(anamnesis);
    dispatch(processAnamnesisRequest({ text: anamnesis }));
  }

  return (
      <>
          <form className={classNames(cls.ProcessAnamnesis, {}, [className])}
                method="post"
                onSubmit={handleSubmit}
          >
              <label>Введите анамнез:</label>
              <textarea
                  value={anamnesis}
                  onChange={e => { onChangeAnamnesis(e.target.value); }}
                  rows={5}
                  cols={40}
              />
              <div className={cls.btns}>
                  <Button type="reset" variant="outlined" color="error" onClick={e => { setText(''); }}>Очистить</Button>
                  <Button disabled={isLoading} type="submit" variant="contained" endIcon={<SendIcon />}>Обработать</Button>
              </div>
          </form>
          {isLoading ? <PageLoader/> : <EntitiesList items={entitiesList}/>}
      </>

  );
});
