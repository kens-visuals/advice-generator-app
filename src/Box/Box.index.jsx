// custom hooks
import useWidth from 'hooks/useWidth';
import useData from 'hooks/useData';

// styles
import * as B from './Box.styles';

// assets
import dice from 'images/icon-dice.svg';

export default function Box() {
  const imageUrl = useWidth();
  const { advice, hasError, isNewAdvice, setIsNewAdvice } = useData();

  const adviceId = hasError ? 'Erorr 404' : `Advice #${advice.id}`;
  const adviceTxt = hasError
    ? 'Seneca says that you have a problem with your connection. Please try again!'
    : advice.body;

  return (
    <B.Background>
      <B.AviceNum>{adviceId}</B.AviceNum>
      <B.Advice>&#10077; {adviceTxt} &#10078;</B.Advice>
      <B.DividerIcon src={imageUrl} alt="divider" />
      <B.AviceNum>{advice.author}</B.AviceNum>
      <B.Button
        style={{ backgroundImage: `url(${dice})` }}
        onClick={() => setIsNewAdvice(!isNewAdvice)}
      ></B.Button>
    </B.Background>
  );
}
