import { useState, useEffect } from "react";

const useFetch = (url, condition = true) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!url) {
            console.error("useFetch requires a URL as an argument");
            return;
        };
        const fetchData = async () => {
            /*
                If this app needs to support IE or other browsers that don't support fetch
                I recommend using this polyfill:  https://github.com/github/fetch as
                opposed to a heavier package like axios or etc.
            */
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
        };

        if (condition) fetchData().catch(console.error);
    }, [url, condition]);

    return data;
};

export default useFetch;
