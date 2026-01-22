import Loading from "./LoadingEffect";

type Props = {
  loading: boolean;
  children: React.ReactNode;
};

export default function Loadable({ loading, children }: Props) {
  if (loading) return <Loading />;
  return <>{children}</>;
}
