import React from 'react';
import {screen, render, fireEvent} from '@testing-library/react';
import Home from '../components/Home';
import { Provider } from 'react-redux'
import createMockStore from 'redux-mock-store'
import InputWord from '../components/InputWord';


describe('Palindrome Tests', () => {
    const initialState = {output:10, message:[]}
    const mockStore = createMockStore()
    let store,wrapper

    it('Textbox for Word exists.', () => {
        store = mockStore(initialState)
        render(<Provider store={store}><InputWord/></Provider>)
        expect(screen.queryByPlaceholderText(/Insert text/i)).toBeInTheDocument();
    })
   

    it('Make sure inputted text', () => {
        store = mockStore(initialState)
        render(<Provider store={store}><InputWord/></Provider>)
        const wordInput = screen.queryByPlaceholderText(/Insert text/i)
        fireEvent.change(wordInput, { target: { value: 'madam' } })
        expect(wordInput.value).toBe('madam')
    });

    it('Make sure Button "Send" exists.', () => {
        store = mockStore(initialState)
        render(<Provider store={store}><InputWord/></Provider>)
        expect(screen.queryByText(/Send/i)).toBeInTheDocument();
    });

    it('Make sure Button "Send" has clicked.', () => {
        store = mockStore(initialState)
        render(<Provider store={store}><InputWord/></Provider>)
        const button=screen.queryByText(/Send/i);
        expect(button.hasAttribute('disabled')).toBe(false);
        fireEvent.click(button);        
    });
});