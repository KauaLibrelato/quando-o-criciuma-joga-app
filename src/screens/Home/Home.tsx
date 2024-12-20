import React, { useState } from 'react';
import { LastMatchCard, NextMatchCard, PrincipalNextMatchCard } from '~/components';
import * as S from './HomeStyles';
import { shouldShowOne, useTeamData } from './utils/functions';
import { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { FlatList, ListRenderItem } from 'react-native';
import { TabState } from './utils/constants';

export function Home() {
  const { data, isLoading } = useTeamData();
  const principalMatch = data?.upcomingMatches[0];
  const [activeTab, setActiveTab] = useState<TabState>(TabState.NEXT);
  const translateX = useSharedValue(0);

  const handleSwitch = (tab: TabState) => {
    setActiveTab(tab);
    translateX.value = tab === TabState.NEXT ? 0 : 150;
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: withTiming(translateX.value, { duration: 300 }) }],
  }));

  const renderItem: ListRenderItem<MatchData> = ({ item }) => {
    return (
      <>
        {activeTab === TabState.NEXT ? (
          <NextMatchCard
            match={item}
            one={shouldShowOne(data, activeTab)}
            horizontal={!!principalMatch}
          />
        ) : (
          <LastMatchCard
            match={item}
            one={shouldShowOne(data, activeTab)}
            horizontal={!!principalMatch}
          />
        )}
      </>
    );
  };

  return (
    <S.Container>
      {isLoading ? (
        <S.LoadingContainer>
          <S.Loading />
        </S.LoadingContainer>
      ) : (
        <>
          {principalMatch && (
            <S.PrincipalNextMatchCardContainer>
              <PrincipalNextMatchCard match={principalMatch} />
            </S.PrincipalNextMatchCardContainer>
          )}

          <S.SelectorContainer>
            <S.SwitchContainer>
              <S.ActiveBackground style={animatedStyle} />
              <S.SwitchButton onPress={() => handleSwitch(TabState.NEXT)}>
                <S.SwitchText isActive={activeTab === TabState.NEXT}>
                  Próximas Partidas
                </S.SwitchText>
              </S.SwitchButton>
              <S.SwitchButton onPress={() => handleSwitch(TabState.PREVIOUS)}>
                <S.SwitchText isActive={activeTab === TabState.PREVIOUS}>
                  Partidas Anteriores
                </S.SwitchText>
              </S.SwitchButton>
            </S.SwitchContainer>
          </S.SelectorContainer>

          <FlatList
            horizontal={!!principalMatch}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={activeTab === TabState.NEXT ? data?.upcomingMatches : data?.previousMatches}
            keyExtractor={(item: MatchData) => item.fixture.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 16 }}
            ListEmptyComponent={() => (
              <S.EmptyContainer>
                <S.EmptyText>Nenhuma partida encontrada</S.EmptyText>
              </S.EmptyContainer>
            )}
          />
        </>
      )}
    </S.Container>
  );
}
