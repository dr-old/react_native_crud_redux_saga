import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ButtonIcon from '../src/components/atoms/ButtonIcon';

describe('ButtonIcon component', () => {
  test('renders correctly', () => {
    const {getByText} = render(
      <ButtonIcon
        type="primary"
        name="check"
        size={24}
        label="Primary Button"
      />,
    );
    const button = getByText('Primary Button');
    expect(button).toBeTruthy();
  });

  test('click event works', () => {
    const handleClick = jest.fn();
    const {getByText} = render(
      <ButtonIcon
        type="default"
        name="info"
        size={24}
        label="Default Button"
        onClick={handleClick}
      />,
    );
    const button = getByText('Default Button');
    fireEvent.press(button);
    expect(handleClick).toHaveBeenCalled();
  });

  // Add more tests as needed...
});
