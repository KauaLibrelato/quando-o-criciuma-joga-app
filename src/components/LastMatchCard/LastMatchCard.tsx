import { format } from 'date-fns';
import * as Icon from 'phosphor-react-native';
import React from 'react';
import * as S from './LastMatchCardStyles';
import { useTheme } from 'styled-components/native';

export function LastMatchCard({
  one,
  match,
  horizontal,
}: {
  one: boolean;
  match: MatchData;
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

        <S.ResultContainer>
          <S.ResultText>{`${match?.goals?.home} - ${match?.goals?.away}`}</S.ResultText>
        </S.ResultContainer>

        <S.Championship>{match?.league?.name?.split('-')[0]}</S.Championship>
      </S.CenterContainer>
      <S.RightContainer>
        <S.Image source={{ uri: match?.teams?.away?.logo }} />
      </S.RightContainer>
    </S.Container>
  );
}
