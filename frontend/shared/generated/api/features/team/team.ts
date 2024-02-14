/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * Hermes
 * OpenAPI spec version: 0.0.1
 */
import {
  useMutation
} from '@tanstack/react-query'
import type {
  MutationFunction,
  UseMutationOptions
} from '@tanstack/react-query'
import axios from 'axios'
import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import type {
  ModelNotFoundExceptionResponse,
  TournamentsTeamsStore201,
  TournamentsTeamsStore400,
  TournamentsTeamsStoreBody,
  ValidationExceptionResponse
} from '../../models'

type AwaitedInput<T> = PromiseLike<T> | T;

      type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;



export const tournamentsTeamsStore = (
    tournament: string,
    tournamentsTeamsStoreBody: TournamentsTeamsStoreBody, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<TournamentsTeamsStore201>> => {
    
    return axios.post(
      `/tournaments/${tournament}/teams`,
      tournamentsTeamsStoreBody,options
    );
  }



export const getTournamentsTeamsStoreMutationOptions = <TError = AxiosError<TournamentsTeamsStore400 | ModelNotFoundExceptionResponse | ValidationExceptionResponse>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof tournamentsTeamsStore>>, TError,{tournament: string;data: TournamentsTeamsStoreBody}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof tournamentsTeamsStore>>, TError,{tournament: string;data: TournamentsTeamsStoreBody}, TContext> => {
 const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof tournamentsTeamsStore>>, {tournament: string;data: TournamentsTeamsStoreBody}> = (props) => {
          const {tournament,data} = props ?? {};

          return  tournamentsTeamsStore(tournament,data,axiosOptions)
        }

        


   return  { mutationFn, ...mutationOptions }}

    export type TournamentsTeamsStoreMutationResult = NonNullable<Awaited<ReturnType<typeof tournamentsTeamsStore>>>
    export type TournamentsTeamsStoreMutationBody = TournamentsTeamsStoreBody
    export type TournamentsTeamsStoreMutationError = AxiosError<TournamentsTeamsStore400 | ModelNotFoundExceptionResponse | ValidationExceptionResponse>

    export const useTournamentsTeamsStore = <TError = AxiosError<TournamentsTeamsStore400 | ModelNotFoundExceptionResponse | ValidationExceptionResponse>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof tournamentsTeamsStore>>, TError,{tournament: string;data: TournamentsTeamsStoreBody}, TContext>, axios?: AxiosRequestConfig}
) => {

      const mutationOptions = getTournamentsTeamsStoreMutationOptions(options);

      return useMutation(mutationOptions);
    }
    