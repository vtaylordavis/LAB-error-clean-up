// import '../styles/main.scss'; // You have to import your styles for them to work. Comment in this line

import {
  htmlStructure, header, startSortingBtn, studentAreas
} from '../components/HTMLstructure';
import events from '../utils/events';
import { form } from '../utils/form';

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  studentAreas();
  form();
  events(); // always load last
};

startApp();
