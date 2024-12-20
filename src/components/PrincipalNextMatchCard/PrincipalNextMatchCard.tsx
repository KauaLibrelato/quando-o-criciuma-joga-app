import { format } from 'date-fns';
import * as Icon from 'phosphor-react-native';
import React, { useEffect, useState } from 'react';
import * as S from './PrincipalNextMatchCardStyles';
import { calculateTimeRemaining, compareDate } from './utils/functions';
import { useTheme } from 'styled-components/native';

export function PrincipalNextMatchCard({ match }: { match: MatchData }) {
  const theme = useTheme();
  const date = match?.fixture?.date ? new Date(match?.fixture?.date) : new Date();
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(date));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(date));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <S.Container>
      <S.DayContainer>
        <Icon.CalendarBlank weight="bold" size={24} color={theme.colors.textColor} />
        <S.Day>
          {format(date, 'dd/MM/yyyy')}
          {compareDate(date) ? ` - ${compareDate(date)}` : ''}
        </S.Day>
      </S.DayContainer>

      <S.HourContainer>
        <Icon.Clock size={24} color={theme.colors.textColor} weight="fill" />
        <S.Hour>{format(date, 'HH:mm')}h</S.Hour>
      </S.HourContainer>

      <S.TimerContainer>
        <S.InsideTimerContainer>
          <S.Time>{timeRemaining.days}</S.Time>
          <S.TimeDescription>Dias</S.TimeDescription>
        </S.InsideTimerContainer>

        <S.TwoPointsContainer>
          <S.TwoPoints>:</S.TwoPoints>
        </S.TwoPointsContainer>

        <S.InsideTimerContainer>
          <S.Time>{timeRemaining.hours}</S.Time>
          <S.TimeDescription>Horas</S.TimeDescription>
        </S.InsideTimerContainer>

        <S.TwoPointsContainer>
          <S.TwoPoints>:</S.TwoPoints>
        </S.TwoPointsContainer>

        <S.InsideTimerContainer>
          <S.Time>{timeRemaining.minutes}</S.Time>
          <S.TimeDescription>Minutos</S.TimeDescription>
        </S.InsideTimerContainer>

        <S.TwoPointsContainer>
          <S.TwoPoints>:</S.TwoPoints>
        </S.TwoPointsContainer>

        <S.InsideTimerContainer>
          <S.Time>{timeRemaining.seconds}</S.Time>
          <S.TimeDescription>Segundos</S.TimeDescription>
        </S.InsideTimerContainer>
      </S.TimerContainer>

      <S.MatchInfos>
        <S.Teams>
          <S.LogosContainer>
            <S.TeamContainer>
              <S.Image source={{ uri: match?.teams?.home?.logo }} />
            </S.TeamContainer>

            <S.XContainer>
              <Icon.X size={32} weight="bold" color={theme.colors.textColor} />
            </S.XContainer>

            <S.TeamContainer>
              <S.Image source={{ uri: match?.teams?.away?.logo }} />
            </S.TeamContainer>
          </S.LogosContainer>

          <S.TeamText>
            {match?.teams?.home?.name} X {match?.teams?.away?.name}
          </S.TeamText>
        </S.Teams>

        <S.Championship>{match?.league?.name?.split('-')[0]}</S.Championship>

        <S.StadiumContainer>
          <S.StadiumText>{match?.fixture?.venue?.name}</S.StadiumText>
        </S.StadiumContainer>
      </S.MatchInfos>
    </S.Container>
  );
}
