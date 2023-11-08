import React from 'react';
import { atom, selector, useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';

// 使用前需要在 index 文件下在外层元素嵌套 RecoilRoot
// 为了方便才写到一个文件中
const countState = atom({
    key: 'countState',
    default: 1
});

const priceState = selector({
    key: 'priceState',
    get: ({ get }) => {
        const text = get(countState);
        return `￥${text}`;
    }
});

const Recoil = () => {
    const [counter, setCounter] = useRecoilState(countState);
    const price = useRecoilValue(priceState);
    const reset = useResetRecoilState(countState);

    return (
        <section id='section-counter'>
            <h3>Counter Recoil</h3>
            <p>Count is: {counter}, price is: {price}</p>
            <div>
                <button onClick={() => setCounter(counter + 1)}>Add 1</button>
                <button onClick={() => setCounter(counter - 1)}>Decrease 1</button>
                <button onClick={() => setCounter(counter + 10)}>Add 10</button>
                <button onClick={() => setCounter(counter - 10)}>Decrease 10</button>
                <button onClick={reset}>reset</button>
            </div>
        </section>
    )
};

export default Recoil;