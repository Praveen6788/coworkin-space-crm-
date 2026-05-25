import { branches } from "../data/branches";

export const getBranches = () => branches;

export const getBranchBySlug = (slug) =>
  branches.find((branch) => branch.slug === slug);
