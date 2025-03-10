// @ts-nocheck

import * as React from "react";
import { ServerCard } from "~/components/mine/servercard";

const ServerPage = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
		<ServerCard serverName="EmoG" serverDescription={
			"Need emojis? Don't worry, we've got loads!\n" +
			"Spanning over 2 servers, you will find countless numbers of emojis to use anywhere around Revolt. Join now!"
		} serverInviteUrl="https://rvlt.gg/w4NykttM" />
		<ServerCard serverName="Testing" serverDescription="Cool!" />
		<ServerCard />
		<ServerCard />
		<ServerCard />
		<ServerCard />
		<ServerCard />
		<ServerCard />
		<ServerCard />
		<ServerCard />
		<ServerCard />
		<ServerCard />
	</div>
));
ServerPage.displayName = "ServerPage";

export {
	ServerPage
}