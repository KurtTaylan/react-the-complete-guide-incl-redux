import reducer from './authReducer';
import * as actionTypes from '../action/actionTypes'

describe('auth reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      redirectPath: '/'
    });
  });
  
  it('should store the token up on login', () => {
    expect(reducer({
      token: null,
      userId: null,
      error: null,
      loading: false,
      redirectPath: '/'
    }, {
      type: actionTypes.AUTH_SUCCESS,
      token: 'some-token',
      userId: 'some-id'
    })).toEqual({
      token: 'some-token',
      userId: 'some-id',
      error: null,
      loading: false,
      redirectPath: '/'
    });
    
    
  });
});