import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import logoImg from '../../assets/logo.png';
import { Avatar, Container, Logo } from './styles';


export function Header() {
  return (
    <Container>
      <Avatar
        source={{ uri: 'https://github.com/rodrigorgtic.png' }}
        accessible
        accessibilityLabel="Avatar do usuário"
      />

      <Logo source={logoImg} />

      <TouchableOpacity
        accessible
        accessibilityLabel="Sair do app"
      >
        <FontAwesome name="power-off" size={24} color="#595859" />
      </TouchableOpacity>
    </Container>
  );
}