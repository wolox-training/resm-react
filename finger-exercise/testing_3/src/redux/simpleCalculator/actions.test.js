import actionCreators, { actions } from './actions'

describe('Action --- Test simple calculator actions', () => {
  it('actionCreator ADD', () => {
    const add = actionCreators.add();
    expect(add).toEqual({ type: actions.ADD });
  });

  it('actionCreator SUBSTRACT', () => {
    const subtract = actionCreators.substract();
    expect(subtract).toEqual({ type: actions.SUBSTRACT });
  });
});
