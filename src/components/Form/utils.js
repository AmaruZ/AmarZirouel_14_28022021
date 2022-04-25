export const resetFormFields = (
    firstNameRef,
    lastNameRef,
    birthDateRef,
    startDateRef,
    streetRef,
    cityRef,
    zipCodeRef
) => {
    firstNameRef.current.value = ''
    lastNameRef.current.value = ''
    birthDateRef.current.value = ''
    startDateRef.current.value = ''
    streetRef.current.value = ''
    cityRef.current.value = ''
    zipCodeRef.current.value = ''
}
