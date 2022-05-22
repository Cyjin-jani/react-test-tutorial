import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('the counter starts at 0', () => {
  // app 컴포넌트를 렌더링합니다.
  render(<App />);
  // screen object를 이용하여 원하는 엘리먼트에 접근을 한다. (ID로 접근)
  const counterEl = screen.getByTestId('counter');
  // id가 counter인 엘리먼트의 텍스트가 0인지 확인
  expect(counterEl).toHaveTextContent(0);
});

test('minus Btn has correct text "minus"', () => {
  render(<App />);
  const minusBtn = screen.getByTestId('minusBtn');
  expect(minusBtn).toHaveTextContent('-');
});

test('plus Btn has correct text "plus"', () => {
  render(<App />);
  const plusBtn = screen.getByTestId('plusBtn');
  expect(plusBtn).toHaveTextContent('+');
});

test('when the plus btn is pressed, the counter number changes to 1', () => {
  render(<App />);
  const btnElement = screen.getByTestId('plusBtn');
  fireEvent.click(btnElement);
  const counterEl = screen.getByTestId('counter');
  expect(counterEl).toHaveTextContent('1');
});

test('when the minus btn is pressed, the counter number changes to -1', () => {
  render(<App />);
  const btnElement = screen.getByTestId('minusBtn');
  fireEvent.click(btnElement);
  const counterEl = screen.getByTestId('counter');
  expect(counterEl).toHaveTextContent('-1');
});

test('on and off btn has blue background color', () => {
  render(<App />);
  const btnElement = screen.getByTestId('onOffBtn');
  expect(btnElement).toHaveStyle({ backgroundColor: 'blue' });
});

test('make disable plus and minus btn when onOffbtn is clicked', () => {
  render(<App />);
  const onOffbtnElement = screen.getByTestId('onOffBtn');
  fireEvent.click(onOffbtnElement);
  const plusElement = screen.getByTestId('plusBtn');
  const minusElement = screen.getByTestId('minusBtn');
  expect(plusElement).toBeDisabled();
  expect(minusElement).toBeDisabled();
});

// 기본적으로 되어있는 구조.
// test('renders learn react link', () => {
//   render(<App />);
//   // const linkElement = screen.getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();

//   // linst 설정 제대로 되었는지 테스트
//   // const lintTest = screen.getByRole('button', { name: 'lintTest' });
//   // expect(lintTest).toHaveTextContent('lintTest');
// });

/**
 *
 * testing library의 query에 대해... (getBy***)
 */

// getByTestId는 사실 getbyRole이나 getByText로 사용할 수 없는 최후의 경우 사용한다.

/**
 *
 * userEvent에 대해
 */

/**
 * userEvent는 fireEvent를 사용해서 만들어졌다.
 * 엘리먼트 타입에 따라서 클릭 시 그에 맞는 적절한 반응을 보여준다.
 *
 * 예를 들어, fireEvent로 버튼을 클릭한다면,
 * 즉, fireEvent.click(button)이라면, focus되는 효과는 발생하지 않으나,
 * userEvent.click을 이용하면 버튼이 focus가 된다.
 * 이렇게 실제 사용하는 유저의 버튼 클릭 행위와 거의 동일하게 테스팅이 될 수 있도록 해준다.
 * 그러므로 fireEvent보다는 userEvent를 사용하는 것이 더 적합한 테스팅 방법이 된다.
 */
