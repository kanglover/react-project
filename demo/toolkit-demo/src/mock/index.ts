import Mock from 'mockjs';
import { getTopics } from './topic';

Mock.mock(new RegExp('/topic'), 'get', getTopics);
