import React from 'react';
import Loaders from 'react-loaders';
import 'loaders.css/src/animations/pacman.scss';
import './style.scss';

const Loader = Loaders.Loader;

const Loading = () => (
  <Loader type="pacman" active size="lg"/>
);

export default Loading;
