import { ActivityIndicator } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.bgColor};
`;

export const LoadingContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bgColor};
  justify-content: center;
  align-items: center;
`;

export const Loading = styled(ActivityIndicator).attrs(({ theme }) => ({
  size: 'large',
  color: theme.colors.white,
}))``;

export const PrincipalNextMatchCardContainer = styled.View`
  margin-bottom: 16px;
`;

export const SelectorContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

export const SwitchContainer = styled.View`
  flex-direction: row;
  width: 300px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.tableHeader};
  border-radius: 25px;
  overflow: hidden;
`;

export const ActiveBackground = styled(Animated.View)`
  position: absolute;
  width: 150px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
`;

export const SwitchButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const SwitchText = styled.Text<{ isActive: boolean }>`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.medium};
  text-align: center;
  color: ${({ isActive, theme }) => (isActive ? theme.colors.textColor : theme.colors.textColor)};
`;

export const EmptyListText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.medium};
  text-align: center;
  margin-top: 16px;
`;

export const EmptyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const EmptyText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.medium};
  text-align: center;
  margin-top: 16px;
`;
