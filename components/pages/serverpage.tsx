// @ts-nocheck

import * as React from "react";
import { BannerCard } from "~/components/mine/bannerCard";

const ServerPage = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
		<BannerCard name="EmoG" description={
			"Need emojis? Don't worry, we've got loads!\n" +
			"Spanning over 2 servers, you will find countless numbers of emojis to use anywhere around Revolt." +
			"Join now!" +
			"Spanning over 2 servers, you will find countless numbers of emojis to use anywhere around Revolt." +
			"Join now!" +
			"Spanning over 2 servers, you will find countless numbers of emojis to use anywhere around Revolt." +
			"Join now!" +
			"Spanning over 2 servers, you will find countless numbers of emojis to use anywhere around Revolt." +
			"Join now!" +
			"Spanning over 2 servers, you will find countless numbers of emojis to use anywhere around Revolt." +
			"Join now!" +
			"Spanning over 2 servers, you will find countless numbers of emojis to use anywhere around Revolt." +
			"Join now!"
		} inviteUrl="https://rvlt.gg/w4NykttM" isVerified="true" />
		<BannerCard name="Testing" description="Cool!" />
		<BannerCard />
		<BannerCard />
		<BannerCard />
		<BannerCard />
		<BannerCard />
		<BannerCard />
		<BannerCard />
		<BannerCard />
		<BannerCard />
		<BannerCard />
	</div>
));
ServerPage.displayName = "ServerPage";

export {
	ServerPage
}