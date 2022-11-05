import { ChevronIcon } from "../components/Icons";

interface Props {
  name: string;
}

const ProfileCard = ({ name }: Props) => {
  const avatarURL = (name: string) => {
    return `https://avatars.dicebear.com/api/adventurer-neutral/${name.replaceAll(
      " ",
      "%20"
    )}.svg`;
  };
  return (
    <div className="flex items-center gap-2 text-gray-500">
      <span className="text-2xl font-medium">{name}</span>
      <img
        src={avatarURL(name)}
        alt={name}
        className="h-12 w-12 rounded-full"
      />
      <ChevronIcon.Down className="h-6 w-6 sm:w-20" />
    </div>
  );
};

export default ProfileCard;
