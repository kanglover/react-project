import { useEffect, useRef } from "react";
import mousetrap from 'mousetrap';

const noop = () => {}

// 绑定快捷键
export function useKey(key: string, action: () => void) {
    const actionRef = useRef(noop);
    actionRef.current = action;

    useEffect(() => {
        mousetrap.bindGlobal(key, (event: Event) => {
            event.preventDefault();
            actionRef.current && actionRef.current();
        });

        return () => mousetrap.unbind(key);
    }, [key]);
}