const Bookmark = () => (
  <svg className="place-card__bookmark-icon" width="18" height="19">
    <use xlinkHref="#icon-bookmark"></use>
  </svg>
);

type IconType = {
  Bookmark: typeof Bookmark;
};

export const Icon: IconType = () => <></>;

Icon.Bookmark = Bookmark;
