import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectRequestStatus } from "../entities/request/requestSlice";
import { useAppDispatch, type RootState } from "../store";


//TODO: Improve types
export const useRequest = (thunk, payload = null) => {
  const dispatch = useAppDispatch();

  const [request, setRequest] = useState(null);

  const requestStatus = useSelector((state: RootState) =>
    selectRequestStatus(state, request?.requestId)
  );

  useEffect(() => {
    const request = dispatch(thunk(payload));
    setRequest(request);

    return () => {
      if (request && request.abort) {
        request.abort();
      }
      setRequest(null);
    };
  }, [thunk, payload, dispatch]);

  return requestStatus;
};







