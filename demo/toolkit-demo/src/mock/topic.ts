import Mock from 'mockjs';

export const getTopics = () => {
    return Mock.mock({
        'data|10': [{
            'id|1-10': 1,
            'text|+1': ['@cparagraph']
        }]
    }).data;
}
