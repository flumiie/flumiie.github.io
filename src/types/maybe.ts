enum MaybeType {
  Just = "maybe-type__just",
  Nothing = "maybe-type__nothing",
}

interface Just<T> {
  type: typeof MaybeType.Just;
  value: T;
}

interface Nothing {
  type: typeof MaybeType.Nothing;
}

type JustOrNothing<T> = Just<T> | Nothing;

type Maybe<T> = T | null | undefined;

const Nothing = (): Nothing => ({
  type: MaybeType.Nothing,
});

const Just = <T>(value: T): Just<T> => ({
  type: MaybeType.Just,
  value,
});
