import { Feather } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Button, Container, Input } from './styles';

export function Search() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [loading]);

  return (
    <Container>
      <Input placeholder="Encontrar partida..." />

      <Button
        onPress={() => setLoading(!loading)}
        disabled={loading}
        accessibilityHint="Buscar partida pelo nome do time"
        accessibilityState={{ disabled: loading }}
        accessibilityValue={{
          text: loading
            ? 'Carregando partidas, aguarde.'
            : 'Botão de pesquisa disponível novamente.',
        }}
      >
        {loading ? (
          <ActivityIndicator color="#FFF" />
        ) : (
          <Feather name="search" size={18} color="#FFF" />
        )}
      </Button>
    </Container>
  );
}
