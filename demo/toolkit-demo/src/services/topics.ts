import axios from 'axios';
import { Topic } from '../reducers/topic';

export const getTopics = () => axios.get('/topic');
export const deleteTopic = ({ id }: { id: string }) =>
    axios.delete(`/topic/${id}`);
export const updateTopic = ({
    id,
    data,
}: {
    id: string;
    data: { isFull: boolean; isIncrement: boolean };
}) => axios.put(`/topic/${id}`, data);
export const createTopic = ({ id, data }: { id: string; data: Topic }) =>
    axios.post(`/topic/${id}`, data);
