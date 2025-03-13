import * as React from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "~/components/ui/card";
import {Label} from "~/components/ui/label";
import {Button} from "~/components/ui/button";
import {TagButton} from "~/components/mine/tagbutton";
import {faInfo, faMessage} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export interface BannerCardProps extends React.HTMLAttributes<HTMLDivElement> {
	name: string | undefined;
	description: string | undefined

	iconUrl: string | undefined;
	bannerUrl: string | undefined;
	inviteUrl: string | undefined;

	isVerified: boolean;
	isBot: boolean;
}

const BannerCard = React.forwardRef<HTMLDivElement, BannerCardProps>(({ className, ...props }, ref) => (
	<Card ref={ref} className={`flex flex-col h-96 overflow-hidden ${className}`}>
		{props.bannerUrl && (
			<div className="relative overflow-hidden rounded-t-2xl">
				<img
					className="w-full object-cover block"
					src={props.bannerUrl}
					alt="Server Banner"
					style={{ height: "150px" }}
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-transparent to-card"></div>
			</div>
		)}
		<div className={`flex justify-center ${props.bannerUrl ? '-mt-8' : 'mt-4'}`}>
			<img
				src={props.iconUrl ?? "https://autumn.revolt.chat/icons/8IKHH2wGygc_emWU_qu3__GuK0u3OQ2MZF8ImHMFhz?width=128"}
				alt="Server Icon"
				className="h-16 w-16 bg-cyan-950 rounded-full p-0.5 z-20"
			/>
		</div>
		<CardTitle className="text-center pl-2 pr-2">
			<div className="inline-flex items-center justify-center gap-2 mx-auto">
				{props.isVerified && (
					<img
						src="https://rvlt.gg/badges/revolt_r.svg"
						alt="Badge"
						className="h-6 w-6"
					/>
				)}
				<Label className="text-2xl font-semibold truncate overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
					{props.name ?? (props.isBot ? "[unnamed bot]" : "[unnamed server]")}
				</Label>
			</div>
		</CardTitle>
		<CardHeader className="p-2 pt-2 flex overflow-y-auto hide-scrollbar">
			<CardDescription className="text-center pl-2 pr-2">
				{props.description ?? "No description provided."}
			</CardDescription>
		</CardHeader>
		<CardFooter className="mt-auto flex flex-col gap-2 items-start pt-2">
				<div className="flex gap-2 overflow-x-auto w-full hide-scrollbar">
				<TagButton label="Tagged" />
				<TagButton label="Tagged 2" />
				<TagButton label="Tagged 3: The Return Of Tagged 1 & 2" />
				<TagButton label="Tagged 4: I Am So Poor" />
			</div>
			<div className="flex flex-row gap-2 w-full">
				<Button
					className="w-full"
					variant="outline"
					disabled={props.inviteUrl === undefined}
					onClick={() => {
						props.inviteUrl && (window.location.href = props.inviteUrl);
					}}
				>
					{props.isBot ? "Invite Bot" : "Join Server"}
				</Button>
				<Button
					className="rounded-full w-10 border-blue-800"
					variant="outline"
					size="icon"
					onClick={() => {
						alert("More details about the server");
					}}>
					<FontAwesomeIcon icon={faInfo} />
				</Button>
			</div>
		</CardFooter>
	</Card>
));
BannerCard.displayName = "ServerCard";

export { BannerCard }