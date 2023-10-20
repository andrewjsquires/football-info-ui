export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Football Info",
	description: "Football Info",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Teams",
			href: "/teams",
		},
		{
			label: "Stats",
			href: "/stats",
		}
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Sign Up",
			href: "/auth/signup",
		},		
		{
			label: "Sign In",
			href: "/auth/signin",
		},		
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
