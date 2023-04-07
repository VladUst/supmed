import React, { memo, useState } from 'react';
import cls from './GPTRecommendations.module.scss';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { Button } from '@mui/material';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { getProcessAnamnesisState } from '../../ProcessAnamnesis/model/getProcessAnamnesisState';
import { PageLoader } from '../../../widgets/PageLoader/PageLoader';
import { classNames, Text } from '../../../shared';
interface GPTRecommendationsProps {
  className?: string
}

const RecommendationsText = ({ recommendations }: { recommendations: string }) => {
  if (!recommendations.length) {
    return (
        <Text title={'Нет рекомендаций'} align={'center'}/>
    );
  }
  return (
      <div className={cls.result}>
          <Text title={'Рекомендации: '} />
          <div className={cls.recommendations}>
              {recommendations}
          </div>
      </div>
  );
};
export const GPTRecommendations = memo(({ className }: GPTRecommendationsProps) => {
  const { anamnesis } = useSelector(getProcessAnamnesisState);
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState('');
  async function getAdvice () {
    setIsLoading(true);
    const url = 'http://127.0.0.1:8000/api/gpt-recommendations/';
    const response = await axios.post(url, {
      text: anamnesis
    });
    setRecommendations(response.data.recommendations);
    setIsLoading(false);
  }

  return (
      <div className={classNames(cls.GPTRecommendations, {}, [className])}>
          <div className={cls.btn}>
              <Button className={cls.btn} onClick={getAdvice} type="submit" variant="contained"
                      startIcon={<LightbulbIcon/>}
                      endIcon={<LightbulbIcon />}>
                  Получить рекомендации ИИ
              </Button>
          </div>
          {isLoading ? <PageLoader/> : <RecommendationsText recommendations={recommendations}/>}
      </div>

  );
});
