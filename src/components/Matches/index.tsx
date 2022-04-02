import React from 'react';
import { FlatList } from 'react-native';
import { TEAMS } from '../../utils/teams';
import { Match } from '../Match';
import { Search } from '../Search';
import { Container, Title } from './styles';



export function Matches() {
  function handleAccessibilityAction(actionName: string) {
    console.log("Ação do usuário: ", actionName);
  }

  return (
    <Container>
      <Title>Próximas partidas</Title>

      <Search />

      <FlatList
        data={TEAMS}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Match
            data={item}
            accessibilityActions={[
              { name: 'activate', label: 'Ver detalhes do jogo' },
              { name: 'longpress', label: 'Atualizar placar do jogo' }
            ]}
            onAccessibilityAction={e => handleAccessibilityAction(e.nativeEvent.actionName)}
          />
        )}
      />
    </Container>
  );
}