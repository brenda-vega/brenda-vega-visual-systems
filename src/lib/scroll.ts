const getAnchorOffset = () => (window.matchMedia("(max-width: 767px)").matches ? 72 : 104);

export const updateHash = (hash: string) => {
  if (window.location.hash === hash) return;
  window.history.pushState(null, "", hash);
};

export const scrollToHash = (hash: string, behavior: ScrollBehavior = "smooth") => {
  if (hash === "#top") {
    window.scrollTo({ top: 0, left: 0, behavior });
    return true;
  }

  const target = document.getElementById(hash.replace("#", ""));
  if (!target) return false;

  const top = target.getBoundingClientRect().top + window.scrollY - getAnchorOffset();
  window.scrollTo({ top: Math.max(top, 0), left: 0, behavior });
  return true;
};

export const navigateToHash = (hash: string, behavior: ScrollBehavior = "smooth") => {
  updateHash(hash);
  window.requestAnimationFrame(() => scrollToHash(hash, behavior));
};
