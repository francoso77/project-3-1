import { Heading } from '../../components/Heading';
import { Base } from '../Base';
import { mockBase } from '../Base/stories';
import * as styled from './styles';

export default function App() {
  return (
    <Base {...mockBase} />
  );
};
