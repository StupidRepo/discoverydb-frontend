import * as React from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "~/components/ui/card";
import {Label} from "~/components/ui/label";
import {Button} from "~/components/ui/button";

export interface ServerCardProps
	extends React.HTMLAttributes<HTMLDivElement> {

	serverName: string | undefined;
	serverDescription: string | undefined;

	serverIconUrl: string | undefined;
	serverBannerUrl: string | undefined;

	serverInviteUrl: string | undefined;

	isVerified: boolean; // Hm, not sure on what we'll be doing for this,
	// but we'll keep it as a field in case of future use.
}

const ServerCard = React.forwardRef<HTMLDivElement, ServerCardProps>(({ className, ...props }, ref) => (
	<Card ref={ref} className={`flex flex-col h-full ${className}`}>
		<div className="overflow-hidden rounded-t-2xl">
			<img
				className="w-full object-cover block"
				src={props.serverBannerUrl ?? "https://autumn.revolt.chat/banners/BCuVqeq6jg6BXmcoH2dE7IS5neCercGTzEb30qDA2I?width=640"}
				alt="Server Banner"
				style={{ height: "150px" }}
			/>
		</div>
		<div className="flex justify-center -mt-8">
			<img
				src={props.serverIconUrl ?? "https://autumn.revolt.chat/icons/8IKHH2wGygc_emWU_qu3__GuK0u3OQ2MZF8ImHMFhz?width=128"}
				alt="Server Icon"
				className="h-16 w-16 bg-cyan-950 rounded-full p-0.5 z-20"
			/>
		</div>
		<CardHeader className="p-4 pt-2 flex flex-col flex-grow">
			<CardTitle className="text-center">
				<div className="inline-flex items-center justify-center gap-2 mx-auto">
					{props.isVerified && (
						<img
							src="https://rvlt.gg/badges/revolt_r.svg"
							alt="Badge"
							className="h-6 w-6"
						/>
					)}
					<Label className="text-2xl font-semibold">{props.serverName ?? "[unnamed server]"}</Label>
				</div>
			</CardTitle>
			<CardDescription className="text-center p-2">
				{props.serverDescription ?? "No description provided."}
			</CardDescription>
		</CardHeader>
		<CardFooter className="mt-auto">
			<Button
				className="w-full"
				variant="outline"
				size="icon"
				disabled={props.serverInviteUrl === undefined}
				onClick={() => {
					props.serverInviteUrl && (window.location.href = props.serverInviteUrl);
				}}
			>
				Join Server
			</Button>
		</CardFooter>
	</Card>
));
ServerCard.displayName = "ServerCard";

export {
	ServerCard
}