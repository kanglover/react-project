import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import { MenuOptions } from '@/interface'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group'
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type
    } as MenuItem
}

// 动态渲染 Icon 图标
const addIcon = (name: string) => <i className={`iconfont ${name} !text-[16px] font-black`} />

// 处理菜单的格式
const deepLoopFloat = (menuList: MenuOptions[], newArr: MenuItem[] = [], path = '') => {
    menuList.forEach((item: MenuOptions) => {
        if (!item?.children?.length) {
            return newArr.push(
                getItem(item?.meta?.title, `${path}/${item.path}`, addIcon(item.icon!))
            )
        }
        newArr.push(
            getItem(
                item?.meta?.title,
                `${path}/${item.path}`,
                addIcon(item.icon!),
                deepLoopFloat(item.children, [], `${path}/${item.path}`)
            )
        )
    })
    return newArr
}

const getOpenKeys = (keys: string | undefined): string[] => {
    if (!keys) {
        return []
    }
    const paths = keys.split('/')
    paths.shift()
    const openKeys = paths.map((item, index) => {
        let key = ''
        if (index == 0) {
            key = '/' + item
        } else {
            key = paths[index - 1] + '/' + item
        }
        paths[index] = key
        return key
    })
    return openKeys
}

const Sider: React.FC = () => {
    const menus = useSelector((state: RootState) => state.menu.menuList);

    const { pathname } = useLocation()
    const [openKeys, setOpenKeys] = useState(getOpenKeys(pathname))
    const [defSelectKeys] = useState([pathname])
    const [menuList, setMenuList] = useState<MenuItem[]>([])

    // getMenuList
    const getMenuData = async () => {
        const tempMenus: MenuOptions[] = []
        menus.map((item: MenuOptions) => {
            if (item.element === 'Layout' && item.children) {
                tempMenus.push(...item.children)
            }
        })
        if (tempMenus.length) {
            setMenuList(deepLoopFloat(tempMenus))
        }
    }

    const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)
        const openkey: string[] = getOpenKeys(latestOpenKey)
        setOpenKeys(openkey)
    }

    // 点击当前菜单跳转页面
    const navigate = useNavigate()
    const clickMenu: MenuProps['onClick'] = ({ key }: { key: string }) => {
        navigate(key)
    }

    useEffect(() => {
        getMenuData()
    }, [menus])

    return (
        <Menu
            mode="inline"
            defaultSelectedKeys={defSelectKeys}
            openKeys={openKeys}
            onClick={clickMenu}
            onOpenChange={onOpenChange}
            items={menuList}
        />
    )
}

export default Sider;
