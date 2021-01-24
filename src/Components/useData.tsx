import { useEffect, useMemo,useState,useReducer } from "react";
import reducer from "./Reducer";

interface Info {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}
export default function useData({dispatch,searchedValue,data}:any) {

   

    useEffect(() => {
        fetch("https://reqres.in/api/users?page=1")
            .then((res) => res.json())
            .then((res) =>
                dispatch({
                    type: "HANDLE_GET_DATA",
                    payload: res.data,
                })
                // setData(res.data)
            );
    }, []);

    const filteredData = useMemo(() => {
        const copyData = [...data];
        const filteredData = copyData.filter((item: Info) =>
            item["first_name"].toLowerCase().includes(searchedValue.toLowerCase())
        );
        return filteredData;
    }, [searchedValue, data]);

    return {
        filteredData
    }
}
