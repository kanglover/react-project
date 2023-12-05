
const menu = [
    {
        element: 'Layout',
        children: [
            {
                icon: 'icon-all',
                path: 'home',
                element: 'home/index',
                meta: {
                    title: '首页'
                }
            }
        ]
    },
    {
        element: 'Layout',
        children: [
            {
                icon: 'icon-set',
                path: 'system',
                meta: {
                    title: '系统管理',
                    auth: true
                },
                children: [
                    {
                        icon: 'icon-set',
                        path: 'account',
                        element: 'system/account/index',
                        meta: {
                            title: '账号管理',
                            auth: true
                        }
                    },
                    {
                        icon: 'icon-set',
                        path: 'notify',
                        element: 'system/notify/index',
                        meta: {
                            title: '消息管理',
                            auth: true
                        }
                    },
                    {
                        icon: 'icon-set',
                        path: 'menu',
                        element: 'system/menu/index',
                        meta: {
                            title: '菜单管理',
                            auth: true
                        }
                    }
                ]
            }
        ]
    }
]

export function getMenuList(): Promise<any> {
    return new Promise((resolve) => {
        resolve(menu);
    });
}