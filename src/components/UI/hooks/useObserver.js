import { useEffect, useRef } from "react";

export const useObserver = (ref, isLoading, paging, canLoad, callback) => {
	const observer = useRef();
    useEffect(()=>{
		if (isLoading) return;

		const cb = function (entries, observer) {
			if (
				entries[0].isIntersecting &&
				canLoad
			) {
				callback();
			}
		};

		observer.current = new IntersectionObserver(cb);
		observer.current.observe(ref.current);
		return () => {
			observer.current.disconnect();
		};
	}, [isLoading, paging]);
}