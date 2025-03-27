// @ts-nocheck

import * as React from "react";
import { BannerCard } from "components/mine/bannercard";

const BotPage = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
		<BannerCard name="DiscoveryCat" iconUrl="https://autumn.revolt.chat/avatars/EmQ4NeOjYzQ81yeBZLftUVAMDG6f-ZJQ1FCBCHO2lm" description={
			`Invite DiscoveryCat to your server to allow automatic server syncing on DiscoveryDB!`
		} inviteUrl="https://rvlt.gg/w4NykttM" bannerUrl="https://autumn.revolt.chat/attachments/j3pDxlLnsz65QpupfA_luKrgHFYXd8ELrFOhRzp6hW/background.jpg" isBot />
		<BannerCard name="Testing" description="Cool!" isBot/>
		<BannerCard isBot />
		<BannerCard isBot />
		<BannerCard isBot />
		<BannerCard isBot />
		<BannerCard isBot />
		<BannerCard isBot />
		<BannerCard isBot />
		<BannerCard isBot />
		<BannerCard isBot />
		<BannerCard isBot />
		<BannerCard isBot />
		<BannerCard isBot />
	</div>
));
BotPage.displayName = "BotPage";

export {
	BotPage
}