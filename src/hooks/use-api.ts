import { useState, useCallback } from 'react';

interface UseApiState<T> {
  data: T | null;
  loadi...