import { useVirtualKeyboardVisible } from "hooks";
import React, { FC, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { MenuItem } from "types/menu";
import { BottomNavigation, Icon } from "zmp-ui";

import { CartIcon } from "./cart-icon";

const tabs: Record<string, MenuItem> = {
	"/": {
		label: "Trang chủ",
		icon: <Icon icon="zi-home" />
	},
	"/notification": {
		label: "Thông báo",
		icon: <Icon icon="zi-notif" />
	},
	"/cart": {
		label: "Giỏ hàng",
		icon: <CartIcon />,
		activeIcon: <CartIcon active />
	},
	"/profile": {
		label: "Cá nhân",
		icon: <Icon icon="zi-user" />
	}
};

export type TabKeys = keyof typeof tabs;

export const NO_BOTTOM_NAVIGATION_PAGES = ["/search", "/category"];

export const Navigation: FC = () => {
	const [activeTab, setActiveTab] = useState<TabKeys>("/");
	const isKeyboardVisible = useVirtualKeyboardVisible();
	const navigate = useNavigate();
	const location = useLocation();

	const isNoBottomNav = useMemo(() => {
		return NO_BOTTOM_NAVIGATION_PAGES.includes(location.pathname);
	}, [location]);

	if (isNoBottomNav || isKeyboardVisible) {
		return <></>;
	}

	return (
		<BottomNavigation
			id="footer"
			activeKey={activeTab}
			onChange={(key: TabKeys) => setActiveTab(key)}
			className="z-50"
		>
			{Object.keys(tabs).map((path: TabKeys) => (
				<BottomNavigation.Item
					key={path}
					label={tabs[path].label}
					icon={tabs[path].icon}
					activeIcon={tabs[path].activeIcon}
					onClick={() => navigate(path)}
				/>
			))}
		</BottomNavigation>
	);
};
