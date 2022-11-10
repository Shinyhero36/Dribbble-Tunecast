const avatarURL = (name: string): string => {
  const encodedName = name.replaceAll(" ", "%20");
  return `https://avatars.dicebear.com/api/adventurer-neutral/${encodedName}.svg`;
};

export { avatarURL };
