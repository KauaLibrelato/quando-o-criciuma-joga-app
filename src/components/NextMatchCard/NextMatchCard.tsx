import { format } from 'date-fns';
import React from 'react';
import * as Icon from 'phosphor-react-native';
import * as S from './NextMatchCardStyles';
import { useTheme } from 'styled-components/native';

export function NextMatchCard({
  match,
  one,
  horizontal,
}: {
  match: MatchData;
  one: boolean;
  horizontal: boolean;
}) {
  const theme = useTheme();
  return (
    <S.Container one={one} horizontal={horizontal}>
      <S.LeftContainer>
        <S.Image source={{ uri: match?.teams?.home?.logo }} />
      </S.LeftContainer>
      <S.CenterContainer>
        <S.DayContainer>
          <Icon.CalendarBlank weight="bold" size={20} color={theme.colors.textColor} />
          <S.Day>{format(match?.fixture?.date, 'dd/MM/yyyy')}</S.Day>
        </S.DayContainer>

        <S.HourContainer>
          <Icon.Clock size={20} color={theme.colors.textColor} weight="fill" />
          <S.Hour>{format(match?.fixture?.date, 'HH:mm')}</S.Hour>
        </S.HourContainer>

        <S.StadiumContainer>
          <S.StadiumText>{match?.fixture?.venue?.name}</S.StadiumText>
        </S.StadiumContainer>

        <S.Championship>{match?.league?.name?.split('-')[0]}</S.Championship>
      </S.CenterContainer>
      <S.RightContainer>
        <S.Image source={{ uri: match?.teams?.away?.logo }} />
      </S.RightContainer>
    </S.Container>
  );
}
