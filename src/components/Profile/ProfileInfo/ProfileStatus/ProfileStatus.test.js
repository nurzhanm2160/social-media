import React from 'react';
import { create } from 'react-test-renderer';
import { ProfileStatus } from './ProfileStatus';

describe('Profile status component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status='проверка статуса' />);
        const instance = component.getInstance();
        expect(instance.statusText).toBe('проверка статуса');
    });

    test('after creation <span> should be displayed', () => {
        const component = create(<ProfileStatus status='проверка статуса' />);
        const instance = component.root;
        const span = instance.findByType('span');
        expect(span).not.toBeNull();
    });

    test('after creation <span> should be displayed with correct status ', () => {
        const component = create(<ProfileStatus status='проверка статуса' />);
        const instance = component.root;
        const span = instance.findByType('span');
        expect(span.children[0]).toBe('проверка статуса');
    });

    test("after creation <input> should'nt ", () => {
        const component = create(<ProfileStatus status='проверка статуса' />);
        const instance = component.root;

        expect(() => {
            const input = instance.findByType('input');
        }).toThrow();
    });

    test('input should be displayed in editMode instead of span', () => {
        const component = create(<ProfileStatus status='проверка статуса' />);
        const instance = component.root;
        const span = instance.findByType('span');
        span.props.onDoubleClick();
        const input = instance.findByType('input');

        expect(input.props.value).toBe('проверка статуса');
    });
});
