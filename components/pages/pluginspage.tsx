// @ts-nocheck

import * as React from "react";
import {PluginCard} from "~/components/mine/plugincard";

const PluginsPage = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div className="grid grid-rows gap-8">
		<PluginCard name="DiscoveryDB" description="The DiscoveryDB plugin replaces the Revolt Discovery page in the Revite client!" />
		<PluginCard name="SuperLongTitleReturnOfTheLongTitleYay" description="The DiscoveryDB plugin replaces the Revolt Discovery page in the Revite client The DiscoveryDB plugin replaces the Revolt Discovery page in the Revite client The DiscoveryDB plugin replaces the Revolt Discovery page in the Revite client The DiscoveryDB plugin replaces the Revolt Discovery page in the Revite client The DiscoveryDB plugin replaces the Revolt Discovery page in the Revite client The DiscoveryDB plugin replaces the Revolt Discovery page in the Revite client" />
		<PluginCard />
	</div>
));
PluginsPage.displayName = "PluginsPage";

export {
	PluginsPage
}