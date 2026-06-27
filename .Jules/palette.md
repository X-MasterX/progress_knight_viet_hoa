## 2024-10-24 - Accessibility focus broken by outline: none
**Learning:** Found a recurring pattern where `button:focus { outline: none; }` is used without providing an alternative focus indicator, breaking keyboard accessibility.
**Action:** Always replace or supplement `outline: none` with `:focus-visible` styles so keyboard users can navigate, while maintaining clean click states for mouse users.
