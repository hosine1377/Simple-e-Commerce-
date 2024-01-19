import React from 'react'
import { Menu } from 'antd'
import { HomeFilled } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
function Header() {
  const navigate = useNavigate()
  const onMenuClick = (item) => {
    navigate(`/${item.key}`)
  }
  return (
    <div className="header-app">
      <Menu
        onClick={onMenuClick}
        mode="horizontal"
        items={[
          {
            label: <HomeFilled />,
            key: '',
          },
          {
            label: 'Men',
            key: 'men',
            children: [
              {
                label: "Man's Shirts",
                key: 'mens-shirts',
              },
              {
                label: "Men's Watches",
                key: 'mans-wathces',
              },
            ],
          },
          {
            label: 'Women',
            key: 'women',
            children: [
              {
                label: "Women's Dresses",
                key: 'Womens-dresses',
              },
              {
                label: "Women's Watches",
                key: 'womens-wathces',
              },
              {
                label: "Women's Shoes",
                key: 'womens-shoes',
              },
              {
                label: "Women's Bags",
                key: 'womens-bags',
              },
              {
                label: "Women's Jewllery",
                key: 'womens-jewllery',
              },
            ],
          },
          {
            label: 'Fragrances',
            key: 'fragrances',
          },
        ]}
      />
    </div>
  )
}

export default Header
