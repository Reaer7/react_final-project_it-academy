type WorkType<T> = {
    items: T[] | [],
    isLoading: boolean | false
}

export type ReportType = {
    id: string,
    name: string,
    urlPhoto: string,
    description: string,
    speakerId: string,
}

export type ReportsType = WorkType<ReportType>;

export type SpeakerType = {
    id: string,
    name: string,
    urlPhoto: string,
    jobTitle: string,
    title: string
}

export type DownloadSpeakerType = {
    item: SpeakerType,
    isLoading: boolean
}

export type SpeakersType = WorkType<SpeakerType>;

export type UserType = {
    id: string;
    accessToken: string | null;
    displayName: string | null;
    email: string | null;
    emailVerified: boolean;
    photoUrl: string | null;
};

export type UpdateUserNameType = {
    displayName: string;
};

export type UpdateUserEmailType = {
    email: string;
};