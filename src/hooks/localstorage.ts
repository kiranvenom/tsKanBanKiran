import { useState, useEffect } from 'react';

type StoredValue<T> = T | null;

function useLocalStorage<T>(
	key: string,
	initialValue: T,
): [StoredValue<T>, (value: T) => void] {
	const [storedValue, setStoredValue] = useState<StoredValue<T>>(() => {
		const item = window.localStorage.getItem(key);
		return item ? JSON.parse(item) : initialValue;
	});

	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(storedValue));
	}, [key, storedValue]);

	const updateStoredValue = (value: T) => {
		setStoredValue(value);
	};

	return [storedValue, updateStoredValue];
}

export default useLocalStorage;
